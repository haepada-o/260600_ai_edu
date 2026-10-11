import fs from 'node:fs/promises';
const root=new URL('../../_internal/impact-ir/impact-business-planning/',import.meta.url);
const paths=['SKILL.md','assets/company-context-template.md','references/planning-worksheet.md','references/business-impact-review.md','agents/openai.yaml'];
const files=Object.fromEntries(await Promise.all(paths.map(async p=>[p,await fs.readFile(new URL(p,root),'utf8')])));
await fs.writeFile(new URL('../../docs/impact-ir/library.json',import.meta.url),JSON.stringify(files,null,2)+'\n');
console.log('Skill library: 5 source files synchronized');
