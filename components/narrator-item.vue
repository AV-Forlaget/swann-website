<template>
    <div class="narrator-item">
        <div class="narrator-item__avatar">
            <img :src="icon" alt>
        </div>
        <div class="narrator-item__content">
            <h4 class="narrator-name" v-text="narrator.name"></h4>
        </div>
        <template v-if="audioFile">
            <button class="narrator-item__preview" :class="{'narrator-item__preview--pause': playing, 'narrator-item__preview--loading': loading}" @click="play">
                <span class="preview-bar preview-bar--first"></span>
                <span class="preview-bar preview-bar--second"></span>
            </button>
            <audio :src="audioFile" ref="audio" preload="none" style="display: none" controls="none"></audio>
        </template>
    </div>    
</template>

<script>
export default {
    props: {
        narrator: {type: Object, default() {return { }}},
        playingAudioId: {type: String, default: null}
    },
    data() {
        return {
            playing: false,
            loading: false,
            loaded: false
        }
    },
    watch: {
        playingAudioId() {
            if(this.playing && this.playingAudioId && this.playingAudioId !== this.narrator.id) {
                this.stopPlay();
            }
        }
    },
    methods: {
        play() {
            if(!this.loaded) {
                this.$refs.audio.load();
                this.loading = true;
                this.$emit('playaudio', this.narrator.id);
                this.$refs.audio.addEventListener('canplaythrough', () => {
                    this.loading = false;
                    this.loaded  = true;
                    if(this.playingAudioId === this.narrator.id) {
                        this.playAudio();
                    }
                });
            } else {
                if(this.playing) {
                    this.stopPlay();
                } else {
                    this.playAudio();
                }
            }
        },
        playAudio() {
            this.$emit('playaudio', this.narrator.id);
            this.playing = true;
            this.$refs.audio.volume = 1;
            this.$refs.audio.play();
        },
        stopPlay() {
            var t;
            let audio = this.$refs.audio;

            let step = (t1) => {
                const dt = t? t1 - t: 0
                const dv = dt/150
                t = t1
                console.log(audio.volume, dt);
                if (audio.volume == 0) {
                    console.log('StopPlay');
                    this.playing = false;
                    audio.pause()
                } else {
                    audio.volume = Math.max(0, audio.volume - dv)
                    window.requestAnimationFrame(step)
                }
            }

            step();
        }
    },
    computed: {
        icon() {
            return (this.narrator.voice.gender == 'male') ? require('@/assets/img/icons/icon-male-narrator.svg') : require('@/assets/img/icons/icon-female-narrator.svg');
        },
        audioFile() {
            return (this.narrator.audiosamples) ? process.env.FILE_URL + this.narrator.audiosamples[0] : null;
        }
    }
}
</script>
