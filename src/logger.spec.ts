import fs from 'fs';
import Logger from './logger';

describe('Logger', () => {
  it('can be instantiated', () => {
    expect(() => new Logger('test')).not.toThrow(Error);
  });

  it('has a yaml file', () => {
    expect(fs.existsSync('logger.yml')).toBe(true);
  });

  it('can get custom namespaces from the yaml file', () => {
    const log = new Logger('test');
    expect(log.dateFormat).toBe('HH:MM');
  });
});
