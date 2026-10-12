export {ROLE_AGENTS} from './runtime-content.js?v=3.0.0-beta.2';
import {stagePrompt} from './stages.js?v=3.0.0-beta.2';
export const TASK_REQUESTS=Object.fromEntries(['context','planning','research','service','competition','market','impact','ir','loop','investor','audit'].map(id=>[id,stagePrompt(id)]));
