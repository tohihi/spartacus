/* tslint:disable */
import { FeatureUnit } from './feature-unit';
import { FeatureValue } from './feature-value';
export interface Feature {
  code?: string;
  comparable?: boolean;
  description?: string;
  featureUnit?: FeatureUnit;
  featureValues?: Array<FeatureValue>;
  name?: string;
  range?: boolean;
  type?: string;
}
