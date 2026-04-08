import { spawn } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = process.cwd()
const packageJsonPath = path.join(projectRoot, 'package.json')

const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'))
const configuredCname = (packageJson.config?.pagesCname ?? '').trim()
const envCname = (process.env.PAGES_CNAME ?? '').trim()
const cname = envCname || configuredCname

const args = ['exec', 'gh-pages', '-d', 'dist']

if (cname) {
  args.push('-c', cname)
  console.log(`Deploying with custom domain: ${cname}`)
} else {
  console.warn('No custom domain configured. Set package.json config.pagesCname or PAGES_CNAME to keep GitHub Pages domain fixed.')
}

const child = spawn('pnpm', args, {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: process.platform === 'win32',
})

child.on('exit', (code) => {
  process.exit(code ?? 1)
})
