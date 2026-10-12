import assert from 'node:assert/strict';
import {quickView,PROGRAM_DOWNLOADS} from '../../docs/impact-ir/quickstart.js';
import {TOOLS} from '../../docs/impact-ir/content.js';
import {fresh} from '../../docs/impact-ir/package.js';
assert.equal(PROGRAM_DOWNLOADS.length,4);
for(const tool of Object.keys(TOOLS)){
 const d=fresh();d.tool=tool;
 const html=quickView(d,TOOLS);
 assert(html.indexOf('프로그램 다운로드·설치')<html.indexOf('1. 전체 패키지 다운로드'));
 for(const p of PROGRAM_DOWNLOADS)for(const [label,url] of p.links){assert(html.includes(`href="${url}"`));assert(html.includes(`${p.name} ${label} (새 창)`));}
 assert(html.includes('data-action="zip"'));
 assert(!html.includes('undefined'));
}
console.log('Program download links: all four selections pass');
