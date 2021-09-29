<template>
    <v-container v-if="hasError">
        <v-row no-gutters>
            <v-col cols="12">
                <template v-if="errMsg.status">
                    <v-card elevation="2" shaped>
                        <v-card-title>{{errMsg.status}}에러</v-card-title>
                        <v-card-subtitle v-if="errMsg.data">{{errMsg.data.msg}}</v-card-subtitle>
                    </v-card>
                </template>
            </v-col>
        </v-row>
</v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['hasError', 'errMsg'])
  }
}
</script>

<style>

</style>
