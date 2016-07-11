import Plugin from 'stc-plugin';
import {extend, isString, isArray} from 'stc-helper';

let options;

export default class BOMDetectorPlugin extends Plugin {
  /**
   * detectBOM
   * {[string]}
   */
  detectBOM(str) {
    // let bom_char = '\ufeff';
    let bom_char_code = 65279;
    if(str.charCodeAt(0) === bom_char_code) {
      return true;
    }
    return false;
  }

  /**
   * run
   */
  async run() {
    
    let content = await this.getContent('utf-8');
    if(this.detectBOM(content)) {
      return {
        message: 'file with BOM',
        line: 0,
        column: 0
      }
    }
    return false;
  }
  /**
   * update
   */
  update(data) {
    if(data) {
      this.error(data.message, data.line, data.column);
    }
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
