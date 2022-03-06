// const colors = import('colors');
import * as fs from 'fs';
import * as YAML from 'js-yaml';

interface LoggerConfig {
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
    let config: LoggerConfig;

    // @ts-ignore
    if (yamlDump[this.namespace]) {
      // @ts-ignore
      config = yamlDump[this.namespace];
    } else {
      // @ts-ignore
      config = yamlDump.default;
    }

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
