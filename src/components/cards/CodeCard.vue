<template>
  <div class="code">
      <!-- Selection -->
      <div class="select">
          <div class="packet" v-for="(code,index) in codes" :key="index" :class="(code.active)? 'active':''" @click="changeCode(index)">
              {{code.name}}
          </div>
      </div>

      <!-- Code installation -->
      <div class="description">
          <span v-for="(line,index) in (filtered[0].install)" :key="index" :class="line.command? 'green' : '' ">{{line.line}}</span>
        </div>
  </div>
</template>

<script>
export default {
    name: 'CodeCard',
    data() {
        return {
            codes: [
                {
                    name: "npm",
                    install: [
                        {
                            line: "$",
                            command: true
                        },
                        {
                            line: "npm install",
                            command: false
                        },
                        {
                            line: "-g",
                            command: true
                        },
                        {
                            line: "claps.js",
                            command: false
                        },
                    ],
                    active: true
                },
                {
                    name: "nuget",
                    install: [
                        {
                            line: "$",
                            command: true
                        },
                        {
                            line: "lorem",
                            command: false
                        },
                        {
                            line: "-g",
                            command: true
                        },
                        {
                            line: "ipsum.js",
                            command: false
                        },
                    ],
                    active: false
                },
                {
                    name: "spm",
                    install: [
                        {
                            line: "$",
                            command: true
                        },
                        {
                            line: "solor",
                            command: false
                        },
                        {
                            line: "-g",
                            command: true
                        },
                        {
                            line: "sit.js",
                            command: false
                        },
                    ],
                    active: false
                },
                {
                    name: "github",
                    install: [
                        {
                            line: "$",
                            command: true
                        },
                        {
                            line: "amet",
                            command: false
                        },
                        {
                            line: "-g",
                            command: true
                        },
                        {
                            line: "consectetur.js",
                            command: false
                        },
                    ],
                    active: false
                },
            ]
        }
    },
    methods: {

        // ChangeCode - Seleziona l'elemento assegnandogli true e deseleziona tutti gli altri assegnandogli false
        changeCode(index) {
            for(let i = 0; i < this.codes.length; i++) {
                if(index == i) {
                    this.codes[i].active = true;
                }
                else this.codes[i].active = false
            }

        }
    },
    computed: {

        // Filtered - Restituisce solo l'elemento selezionato con changeCode()
        filtered() {
            return this.codes.filter((code) => {
                if(code.active) {
                    return true;
                }
                else return false;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/style/general.scss';
    @import '../../assets/style/colors.scss';

    .code {
        background-color: $code_bg;
        color: $white_txt;
        padding: 2rem;
        border-radius: 6px;
        margin: 1rem 0;

        .select {
            background-color: $select_bg;
            border: 1px solid $lightgray_txt;
            display: flex;
            border-radius: 6px;
            cursor: pointer;

            .packet {
                flex: 1;
                padding: 0.5rem;
                text-align: center;
                border-radius: 6px;

            }

            .active {
                background-color: $code_bg;
            }
        }

        .description {
            color: $lightgray_txt;
            margin-top: 2rem;

            span {
                margin-right: 0.5rem;
            }
        }
    }

</style>