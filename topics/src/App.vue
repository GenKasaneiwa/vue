<template>
   <!-- v-appタグは<div id=”app”>と同じ役目をします。v-XXXタグは1つ1つが別々のコンポーネントに対応します。 v-buttonであればボタンコンポーネント、v-iconであればアイコンコンポーネントに対応します。 -->
   <v-app>
      <v-navigation-drawer app v-model="drawer" dark clipped>
         <v-container>
            <v-list-item>
               <v-list-item-content>
                  <v-list-item-title class="title white--text text--darken-2">
                     Navigation lists
                  </v-list-item-title>
               </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list nav dense>
               <v-list-group
                  v-for="nav_list in nav_lists"
                  :key="nav_list.name"
                  :prepend-icon="nav_list.icon"
                  no-action
                  :append-icon="nav_list.lists ? undefined : ''"
               >
                  <template v-slot:activator>
                     <v-list-item-content>
                        <v-list-item-title>{{
                           nav_list.name
                        }}</v-list-item-title>
                     </v-list-item-content>
                  </template>
                  <v-list-item
                     v-for="list in nav_list.lists"
                     :key="list"
                     :to="list.link"
                  >
                     <v-list-item-content>
                        <v-list-item-title>{{ list }}</v-list-item-title>
                     </v-list-item-content>
                  </v-list-item>
               </v-list-group>
            </v-list>
         </v-container>
      </v-navigation-drawer>
      <v-app-bar dark app clipped-left>
         <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
         <v-toolbar-title>Topics</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-toolbar-items>
            <v-btn text to="/enterprise">For Enterprise</v-btn>
            <v-menu offset-y>
               <template v-slot:activator="{ on }">
                  <v-btn v-on="on" text
                     >Support<v-icon>mdi-menu-down</v-icon></v-btn
                  >
               </template>
               <v-list>
                  <v-subheader>Get help</v-subheader>
                  <v-list-item
                     v-for="support in supports"
                     :key="support.name"
                     :to="support.link"
                  >
                     <v-list-item-icon>
                        <v-icon>{{ support.icon }}</v-icon>
                     </v-list-item-icon>
                     <v-list-item-content>
                        <v-list-item-title>{{
                           support.name
                        }}</v-list-item-title>
                     </v-list-item-content>
                  </v-list-item>
               </v-list>
            </v-menu>
         </v-toolbar-items>
      </v-app-bar>
      <v-main>
         <router-view />
      </v-main>
      <v-footer dark app> Footer </v-footer>
   </v-app>
</template>

<style lang="scss">
   /* 共通のscssの読み込み */
   @import "./assets/scss/main.scss";
 </style>

<script>
export default {
   data() {
      return {
         drawer: null,
         supports: [
            {
               name: "Consulting and suppourt",
               icon: "mdi-vuetify",
               link: "/consulting-and-support",
            },
            {
               name: "Discord community",
               icon: "mdi-discord",
               link: "/discord-community",
            },
            {
               name: "Report a bug",
               icon: "mdi-bug",
               link: "/report-a-bug",
            },
            {
               name: "Github issue board",
               icon: "mdi-github",
               link: "/guthub-issue-board",
            },
            {
               name: "Stack overview",
               icon: "mdi-stack-overflow",
               link: "/stack-overview",
            },
         ],
         nav_lists: [
            {
               name: "Getting Started",
               icon: "mdi-speedometer",
               lists: [
                  {
                     name: "Quick Start",
                     link: "Pre-made layouts",
                  },
               ],
            },
            {
               name: "Customization",
               icon: "mdi-cogs",
               lists: [
                  {
                     name: "Quick Start",
                     link: "Pre-made layouts",
                  },
               ],
            },
            {
               name: "Styles & animations",
               icon: "mdi-palette",
               lists: [
                  {
                     name: "Colors",
                     link: "mdi-pallette",
                  },
                  {
                     name: "Content",
                     link: "mdi-pallette",
                  },
                  {
                     name: "Display",
                     link: "mdi-pallette",
                  },
               ],
            },
         ],
      };
   },
};
</script>
