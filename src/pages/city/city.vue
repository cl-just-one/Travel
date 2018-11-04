<template>
  <div>
    <city-header />
    <city-search :cities="cities" />
    <city-list
      :hotCities="hotCities"
      :cities="cities"
      :letter="letter" />
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange" />
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data: function () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo: function () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange: function (letter) {
      this.letter = letter
    }
  },
  mounted: function () {
    this.getCityInfo()
  }
}
</script>

<style></style>