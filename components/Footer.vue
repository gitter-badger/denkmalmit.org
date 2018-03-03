<template>
  <footer class="footer">
    <div class="boundaries">
      © {{ year }} denkmalmit.org |
      <a href="https://denkmal.org" target="_blank" rel="noopener">Denkmal.org</a>
      |
      <a href="mailto:basel@denkmal.org">basel@denkmal.org</a>
      |
      <a href="https://github.com/denkmal" target="_blank" rel="noopener">Github</a>
      |
      <a href="https://twitter.com/denkmal_basel" target="_blank" rel="noopener">Twitter</a>
      |
      <a href="https://www.facebook.com/denkmal.org.basel/" target="_blank" rel="noopener">Facebook</a>
      |
      <a href="/images/MediaPackage.zip" alt="Media Package" download="Denkmal-MediaPackage">Media Package</a>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => ({
    year: (new Date()).getFullYear()
  })
}
</script>
<style>
.footer a {
  color: var(--color-brand);
}
</style>
