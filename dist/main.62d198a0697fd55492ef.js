(()=>{"use strict";class s{constructor(s){this.name=s}run(){console.log(`${this.name} run`)}}class n extends s{run(){super.run(),console.log(`${this.name} now stop!`)}}new class extends n{run(){super.run(),console.log(`${this.name}`)}}("vasya").run()})();
//# sourceMappingURL=main.62d198a0697fd55492ef.js.map