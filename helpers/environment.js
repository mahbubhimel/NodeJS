/* eslint-disable operator-linebreak */
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
};

environments.production = {
    port: 5000,
    envName: 'production',
};

const currentEnvVariable =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

const environmentToExport =
    typeof environments[currentEnvVariable] === 'object'
        ? environments[currentEnvVariable]
        : environments.staging;

module.exports = environmentToExport;
