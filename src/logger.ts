// const colors = import('colors');
import * as fs from 'fs';
import * as YAML from 'js-yaml';

interface LogConf {
  dateFormat: string;
  dateColor: string;

  namespaceColor: string;

  textColor: string;
  debugColor: string;
  errorColor: string;
}

class Logger {
  namespace: string;

  namespaceColor: string;

  dateFormat: string;

  dateColor: string;

  textColor: string;

  debugColor: string;

  errorColor: string;

  public constructor(namespace:string) {
    this.namespace = namespace;

    const yamlDump = YAML.load(fs.readFileSync('logger.yml', 'utf8'));

    // @ts-ignore
    const config: LogConf = yamlDump[this.namespace] ? yamlDump[this.namespace] : yamlDump.default;

    this.dateFormat = config.dateFormat;
    this.dateColor = config.dateColor;
    this.namespaceColor = config.namespaceColor;

    this.textColor = config.textColor;
    this.debugColor = config.debugColor;
    this.errorColor = config.errorColor;
  }

  static log(text:any):void {
    console.log(text);
  }
}

export default Logger;
