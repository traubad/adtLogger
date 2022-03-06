import fs from 'fs';
import Logger from './logger';

describe('Logger', () => {
  it('has a yaml file', () => {
    expect(fs.existsSync('logger.yml')).toBe(true);
  });

  it('can be instantiated', () => {
    expect(() => new Logger('test')).not.toThrow(Error);
  });
});
