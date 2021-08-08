import { configuration as config } from './config';

export default class Configuration {
  private static instance: Configuration;

  private static _environment: string;
  private static _apiUrl: string;
  private static _documentsBucket: string;

  private constructor() {}

  private static initialize(): void {
    this._environment = config.environment;
    this._apiUrl = config.api_url;
    this._documentsBucket = config.documents_bucket;
  }

  public static getInstance(): Configuration {
    if (!this.instance) {
      this.initialize();
      this.instance = new Configuration();
    }

    return this.instance;
  }

  get environment(): string {
    return Configuration._environment;
  }

  get apiUrl(): string {
    return Configuration._apiUrl;
  }

  get documentsBucket(): string {
    return Configuration._documentsBucket;
  }
}
