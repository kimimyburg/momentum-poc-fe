import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Patient } from '../models/patients'

export const usePatientStore = defineStore('patient', () => {
  const patients = ref([] as Patient[])

  function setPatients(item: Patient) {
        patients.value.push(item)
  }

  return { patients, setPatients }
})
