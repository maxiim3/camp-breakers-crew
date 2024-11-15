<template>
  <footer class="bg-stone-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Camps Breakers</h3>
          <p class="text-stone-300">Breaking barriers through dance since 2004</p>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Follow Us</h3>
          <div class="space-y-2">
            <a href="https://www.instagram.com/campsbreakerz" target="_blank" rel="noopener" class="block hover:text-lime-300">Instagram</a>
            <a href="https://www.facebook.com/CampsBreakerz" target="_blank" rel="noopener" class="block hover:text-lime-300">Facebook</a>
            <a href="https://www.youtube.com/@gazabboy" target="_blank" rel="noopener" class="block hover:text-lime-300">YouTube</a>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Contact</h3>
          <a href="mailto:campsbreakerz@gmail.com" class="block hover:text-lime-300">campsbreakerz@gmail.com</a>
          <a href="https://campsbreakerzshop.etsy.com" target="_blank" rel="noopener" class="block hover:text-lime-300 mt-2">CB Crew Store</a>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-stone-700 text-center text-stone-300">
        <p>&copy; {{ new Date().getFullYear() }} Camps Breakers. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
