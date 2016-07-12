import Plugin from 'stc-plugin';
import {extend, isString, isArray} from 'stc-helper';

let options;

export default class BOMDetectorPlugin extends Plugin {
  /**
   * detectBOM
   * {[string]}
   */
  detectBOM(str) {
    let bom_char_reg = /^\ufeff/;
    let bom_char_code = 65279;

    if(str.charCodeAt(0) === bom_char_code) {
      return {
        error: true,
        message: 'file with BOM',
        line: 0,
        column: 0,
        content: str.replace(bom_char_reg, "")
      };
    }
    return {
      error: false,
      content: str
    }
  }

  /**
   * run
   */
  async run() {
    let content = await this.getContent('utf-8');
    let data = this.detectBOM(content);
    return data;
  }
  /**
   * update
   */
  update(data) {
    if(data.error) {
      this.error(data.message, data.line, data.column);
    }
    this.setContent(data.content);
  }

  /**
   * use cluster
   */
  static cluster(){
    return false;
  }
  /**
   * use cache
   */
  static cache(){
    return false;
  }
}
