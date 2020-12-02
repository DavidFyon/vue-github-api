<template>
    <div>
        <section class="hero is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                <router-link to="/">
                    <h1 class="title">
                        Github API
                    </h1>
                </router-link>
                <h2 class="subtitle">
                    David FYON
                </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="menu">
                <router-link to="/">
                    <div class="buttons">
                        <button class="button is-primary">Languages</button>
                    </div>
                </router-link>
                <router-link to="/repo">
                    <div class="buttons">
                        <button class="button is-primary">Repos</button>
                    </div>
                </router-link>
            </div>
        </div>
 
    </div>
</template>

<script>
export default {

}
</script>