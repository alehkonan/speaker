<script lang="ts">
  import '../app.css';
  import Navigation from './Navigation.svelte';
  import Wave from './Wave.svelte';

  let { children } = $props();
</script>

<div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
  <header class="sticky top-0">
    <Wave />
  </header>
  <main>
    {@render children()}
  </main>
  <footer class="sticky bottom-0 z-10 flex justify-center bg-white p-5">
    <Navigation />
  </footer>
</div>
