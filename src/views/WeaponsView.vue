<template>
  <main>
    <h1>WEAPONS</h1>
    <WeaponForm />
    <WeaponsList />
  </main>
</template>

<script>
import WeaponForm from "@/components/Weapons/WeaponForm.vue";
import WeaponsList from "@/components/Weapons/WeaponsList.vue";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("weapons", ["get"]),
  },
  async mounted() {
    await this.get("weapons");
  },
  components: { WeaponForm, WeaponsList },
};
</script>
