<template>
  <v-app>
    <v-layout>
    <v-navigation-drawer
        permanent
      >
        <v-list-item
          prepend-avatar="@/assets/logo.svg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Patients" value="Patients" to="/patients"></v-list-item>
          <v-list-item prepend-icon="mdi-dna" title="Claim" value="Claim" to="/">
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
