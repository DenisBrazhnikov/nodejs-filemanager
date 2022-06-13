import {join} from 'path';

export const up = (workDir) => {
    return {workDir: join(workDir, '..')};
};