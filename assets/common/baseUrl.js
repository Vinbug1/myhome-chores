import { Platform } from 'react-native';

let baseURL = '';

{Platform.OS == 'android' ?  baseURL = '' : baseURL = ''}

export default baseURL;