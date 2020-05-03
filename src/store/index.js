import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    xBall: Math.floor(Math.random() * 300) + 50,
    yBall: 100,
    diameter: 50,
    xBallChange: 5,
    yBallChange: 5,
    xPaddle: 0,
    yPaddle: 0,
    paddleSpeed: 50,
    paddleWidth: 100,
    paddleHeight: 25,
    started: false,
  },
})