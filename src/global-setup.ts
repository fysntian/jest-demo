import type { JestConfigWithTsJest } from 'ts-jest';
import bootstrap from './bootstrap';

export default async function (
  _globalConfig: JestConfigWithTsJest,
  _projectConfig: JestConfigWithTsJest,
) {
  await bootstrap();
}
