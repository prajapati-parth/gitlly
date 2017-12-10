# Gitlly
Minimal git client

![Gitlly-in-action](https://dl.dropboxusercontent.com/s/58z06xfqjxd2js9/gitlly-action.png?dl=0)

## Contributing
* Clone the source code  
`git clone https://github.com/prajapati-parth/gitlly.git`

* Configure to install node native module - Nodegit and install dependencies  
```bash
# Electron's version.
export npm_config_target=1.7.9
# The architecture of Electron, can be ia32 or x64.
export npm_config_arch=x64
export npm_config_target_arch=x64
# Download headers for Electron.
export npm_config_disturl=https://atom.io/download/electron
# Tell node-pre-gyp that we are building for Electron.
export npm_config_runtime=electron
# Tell node-pre-gyp to build module from source code.
export npm_config_build_from_source=true
# Install all dependencies, and store cache to ~/.electron-gyp.
HOME=~/.electron-gyp npm install
```
Reference: https://mitchellsholly.com/the-simpler-way-to-rebuild-native-modules-in-electron/

* Run dev server
`npm run dev`

* Run gitlly
`npm run gitlly`