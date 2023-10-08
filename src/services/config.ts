import * as process from "process";

const devBaseURL = 'http://118.25.22.228:8002'
const proBaseURL = 'https://an.wtututu.top'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000
