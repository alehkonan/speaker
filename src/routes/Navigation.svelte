<script lang="ts">
  const navigationItems = [
    {
      href: '/',
      label: 'Categories',
    },
    {
      href: '/words',
      label: 'Words',
    },
    {
      href: '/game',
      label: 'Game',
    },
    {
      href: '/favorite-words',
      label: 'Favorite words',
    },
    {
      href: '/profile',
      label: 'Profile',
    },
  ];
</script>

<nav class="flex gap-3">
  {#each navigationItems as navigationItem}
    <a href={navigationItem.href} class="inline-flex items-center gap-1">
      <span class="">{navigationItem.label}</span>
    </a>
  {/each}
</nav>
