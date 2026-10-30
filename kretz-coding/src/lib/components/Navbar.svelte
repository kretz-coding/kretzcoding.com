<script>
    import Button from "./Button.svelte";

    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<div class="nav-container">
    <nav>
        <a href="/">
            <img
                class="logo"
                src="/logo.svg"
                alt="Kretz Coding logo"
            />
        </a>

        <button class="menu-icon-container" onclick={toggleMenu}>
            <img
                class="menu-icon"
                src="/menu-icon.svg"
                alt="Menu"
            />
        </button>

        <div class="nav-menu" class:active={isMenuOpen}>
            <a href="/services" onclick={toggleMenu}>Services</a>
            <a href="/projects" onclick={toggleMenu}>Projects</a>
            <a href="/about" onclick={toggleMenu}>About</a>
        </div>
        <div class="nav-menu" class:active={isMenuOpen}>
            <Button
                href="/contact"
                label="Contact us"
                style="fill"
                variant="primary"
                size="m"
            />
        </div>
    </nav>
</div>

<style>
    div.nav-container {
        position: sticky;
        top: 0;
        z-index: 1000;
        container-type: inline-size;
        border-bottom: 2px solid hsla(0, 0%, 0%, .5);
    }

    nav {
        background-color: var(--surface);
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        padding: 0.25rem 1rem;
    }

    a {
        text-decoration: none;
        color: var(--on-surface);
    }

    .logo {
        height: 3rem;
        padding: 0.5rem;
    }

    .menu-icon {
        height: 2rem;
        padding: 0.5rem;
    }

    .menu-icon-container {
        display: block;
        background: none;
        border: none;
    }

    .nav-menu {
        display: none;
        background-color: var(--kc-gray);
        grid-auto-flow: row;
        justify-items: center;
        justify-self: center;
        grid-column: span 2;
        gap: 1rem;
        width: 100%;
        margin-block-end: 1rem;
    }

    .nav-menu.active {
        display: grid;
    }

    /* Desktop */
    @container (min-width: 768px) {
        nav {
            grid-template-columns: auto 1fr auto;
        }

        .nav-menu {
            display: grid;
            justify-self: center;
            grid-auto-flow: column;
            gap: 1rem;
            grid-column: span 1;
            width: fit-content;
            margin: 0;
        }

        .menu-icon-container {
            cursor: pointer;
            display: none;
        }

        .logo {
            height: 2rem;
            padding: 0.5rem;
        }
    }
</style>
