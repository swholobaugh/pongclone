
<template>
  <div ref="parent" class="full">
    <VueP5 v-on="{ setup, draw, keypressed }" />
  </div>
</template>

<script>
import VueP5 from 'vue-p5'
export default {
  name: 'Home',
  components: {
    VueP5,
  },
  methods: {
    setup(s) {
      s.createCanvas(this.$refs.parent.offsetWidth, this.$refs.parent.offsetHeight)
      s.parent(this.$refs.parent)
    },
    draw(s) {
      s.background('#52eeff')
      s.fill(255)
      s.noStroke()
      s.ellipse(this.$store.state.xBall, this.$store.state.yBall, this.$store.state.diameter, this.$store.state.diameter)
      this.$store.state.xBall += this.$store.state.xBallChange
      this.$store.state.yBall += this.$store.state.yBallChange
      if (this.$store.state.xBall < this.$store.state.diameter / 2 || this.$store.state.xBall > s.width - this.$store.state.diameter / 2) {
        this.$store.state.xBallChange *= -1
      }
      if (this.$store.state.yBall < this.$store.state.diameter / 2) {
        this.$store.state.yBallChange *= -1
      }
      if (this.$store.state.yBall > s.height - this.$store.state.diameter / 2) {
        s.textSize(96)
        s.text('GAME OVER', s.width / 2 - 300, s.height / 2 - 48)
        s.noLoop()
      }
      if (!this.$store.state.started) {
        this.$store.state.xPaddle = s.width / 2 - this.$store.state.paddleWidth / 2
        this.$store.state.yPaddle = s.height - 50
        this.$store.state.started = true
      }
      s.fill('#ff5858')
      s.noStroke()
      s.rect(this.$store.state.xPaddle, this.$store.state.yPaddle, this.$store.state.paddleWidth, this.$store.state.paddleHeight)
      if (this.$store.state.xBall > this.$store.state.xPaddle && this.$store.state.xBall < this.$store.state.xPaddle + this.$store.state.paddleWidth && this.$store.state.yBall + this.$store.state.diameter / 2 >= this.$store.state.yPaddle) {
        this.$store.state.xBallChange *= -1
        this.$store.state.yBallChange *= -1
        this.$store.state.score++
      }
    },
    keypressed(s) {
      if (s.keyCode === s.LEFT_ARROW) {
        this.$store.state.xPaddle -= this.$store.state.paddleSpeed
      } else if (s.keyCode === s.RIGHT_ARROW) {
        this.$store.state.xPaddle += this.$store.state.paddleSpeed
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.full {
  width: 100%;
  height: 100%;
}
</style>