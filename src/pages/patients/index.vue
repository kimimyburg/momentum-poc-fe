<template>
    <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
    <v-data-table :items="patients"></v-data-table>
    </v-responsive>
  </v-container>
  </template>
  
  <script setup lang="ts">
  import { usePatientStore } from '@/stores/patients'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'

  const items = [{
        id: "1",
        name: "1",
        surname: "1",
        medical: "1",
        medicalNumber: 0
    },
    {
        id: "2",
        name: "2",
        surname: "2",
        medical: "2",
        medicalNumber: 1
    }]

  onMounted(() => {
    items.forEach(value => {
        setPatients(value)
    })
})

  
  const store = usePatientStore()
  const { patients } = storeToRefs(store)
  const {  setPatients } = store
  
  </script>
  