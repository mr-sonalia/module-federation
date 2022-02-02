<template>
  <div class="container">
    <p>Host</p>
    <vue-card :pName="'Yash'" :pEmail="'s@s.s'" :pPhone="'121234'"></vue-card>
    <!-- <react-card></react-card> -->
  </div>
</template>

<script>
import VueCard from "vue_app/VueCard";
// import ReactCard from "react_app/ReactCard"

export default {
  name: "App",
  components: {
    VueCard ,
    // VueCard : () => import("vue_app/VueCard"),

    // ReactCard
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0px;

  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  width: 100%;
  height: 100%;
}

body {
  width: inherit;
  height: inherit;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

#root {
  width: inherit;
  height: inherit;
}

.container {
  width: inherit;
  height: inherit;

  display: grid;
  place-items: center;
}

.card {
  width: 400px;
  height: fit-content;

  border: 1px solid hsla(0, 0%, 0%, 0.2);
  border-radius: 4px;
  box-shadow: 2px 2px 2px hsla(0, 0%, 0%, 0.2), 4px 4px 4px hsla(0, 0, 0, 0.15);
  // 8px 8px 8px hsla(0,0,0, 0.10);
  // 16px 16px 16px hsla(0,0,0, 0.05);

  &__header {
    padding: 1rem;
    border-bottom: 1px dashed hsla(0, 0, 0, 0.15);
  }

  &__body {
    padding: 1rem;
    border-bottom: 1px dashed hsla(0, 0, 0, 0.15);
  }

  &__footer {
    padding: 1rem;
    font-size: 12px;
  }
}

.form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  &__input {
    padding: 10px;

    border: 1px solid hsla(0, 0%, 0%, 0.2);
    border-radius: 4px;
  }

  &__submit {
    padding: 10px;

    background-color: hsl(128, 71%, 71%);
    border: 1px solid hsl(125, 87%, 63%);
    border-radius: 4px;

    transition: background-color 0.1s ease-in;
    &:hover {
      cursor: pointer;
      background-color: hsl(125, 87%, 63%);
    }
  }
}

.error {
  color: rgb(190, 30, 30);
}
</style>
