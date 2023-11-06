import { DocsThemeConfig } from "nextra-theme-docs";
import NextScript from "next/script";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
};

export const initGA = () => {
  TagManager.initialize(tagManagerArgs);
};

export const logPageView = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: "pageview",
      pagePath: window.location.pathname,
      pageTitle: document.title,
    },
  });
};


const config: DocsThemeConfig = {
  logo: (
    <div style={{ height: 40, display: "flex", gap: 8, alignItems: "end" }}>
      <svg
        width="170"
        height="40"
        viewBox="0 0 267 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M93.5488 14.4387C96.34 14.4387 98.7299 15.5035 100.719 17.6331C102.707 19.7626 103.702 22.2383 103.702 25.0567C103.702 27.875 102.707 30.3947 100.719 32.5154C98.7299 34.638 96.34 35.6992 93.5488 35.6992H82.0708V51.3372H78.7024V14.4387H93.5488ZM93.357 32.8405C95.3615 32.8405 97.0774 32.0762 98.5064 30.5458C99.9337 29.0171 100.648 27.2021 100.648 25.1041C100.648 23.0062 99.9266 21.2368 98.4835 19.6994C97.0404 18.1619 95.3316 17.3941 93.3587 17.3941H82.0708V32.8405H93.3552H93.357Z"
          fill="currentColor"
        />
        <path
          d="M114.145 51.5287C111.546 51.5287 109.384 50.7925 107.66 49.3183C105.935 47.8459 105.073 45.9798 105.073 43.7203C105.073 38.3717 108.802 35.448 116.26 34.9525L123.31 34.5202V33.4871C123.31 31.3259 122.661 29.676 121.362 28.5392C120.063 27.4024 118.282 26.8331 116.021 26.8331C114.048 26.8331 112.44 27.3901 111.197 28.5023C109.955 29.6163 109.228 31.029 109.02 32.7421H105.676C105.933 30.2752 106.968 28.1825 108.781 26.4606C110.594 24.7386 113.056 23.8777 116.167 23.8777C119.279 23.8777 121.922 24.7545 123.757 26.508C125.595 28.2616 126.512 30.6354 126.512 33.6312L126.559 44.706C126.559 46.1468 126.707 47.1518 127.004 47.7211C127.302 48.2904 127.811 48.5575 128.532 48.5258V51.3371C128.034 51.3371 127.578 51.2897 127.161 51.1931C124.931 50.7292 123.712 49.3675 123.504 47.1096C122.783 48.3589 121.551 49.4079 119.81 50.2566C118.07 51.1052 116.181 51.5304 114.143 51.5304L114.145 51.5287ZM114.289 48.5258C116.614 48.5258 118.7 47.8213 120.546 46.4121C122.39 45.0029 123.312 43.3776 123.312 41.5362V37.4528L116.262 37.9571C113.246 38.1486 111.153 38.7618 109.983 39.795C108.813 40.8281 108.226 42.153 108.226 43.7712C108.226 45.212 108.844 46.3664 110.08 47.2309C111.315 48.0954 112.718 48.5276 114.291 48.5276L114.289 48.5258Z"
          fill="currentColor"
        />
        <path
          d="M141.526 51.7692C138.27 51.7692 135.771 50.924 134.03 49.2355C132.29 47.5452 131.355 45.6915 131.227 43.6744H134.331C134.523 44.9869 135.313 46.208 136.702 47.3378C138.089 48.4676 139.701 49.0317 141.538 49.0317C143.375 49.0317 144.919 48.5309 146.17 47.5311C147.421 46.5296 148.046 45.261 148.046 43.7235C148.046 42.1861 147.421 40.9808 146.17 40.2041C144.919 39.4275 143.115 38.8389 140.757 38.4383C138.191 38.006 136.125 37.2769 134.56 36.2525C132.995 35.2281 132.214 33.6187 132.214 31.4241C132.214 29.2295 133.129 27.3125 134.958 25.9596C136.786 24.6066 138.928 23.9302 141.381 23.9302C144.269 23.9302 146.526 24.5539 148.155 25.8032C149.783 27.0525 150.733 28.8711 151.006 31.2572H148.046C147.757 29.6881 146.98 28.5583 145.712 27.8695C144.445 27.1808 143.201 26.8206 141.983 26.7889C140.315 26.7257 138.863 27.0525 137.628 27.7746C136.392 28.495 135.774 29.5598 135.774 30.969C135.774 32.3782 136.355 33.508 137.518 34.1633C138.682 34.8205 140.345 35.316 142.511 35.6533C148.558 36.5986 151.582 39.2009 151.582 43.46C151.582 45.7828 150.619 47.7472 148.694 49.3567C146.768 50.9662 144.378 51.7709 141.524 51.7709L141.526 51.7692Z"
          fill="currentColor"
        />
        <path
          d="M164.384 51.7692C161.129 51.7692 158.629 50.924 156.889 49.2355C155.148 47.5452 154.214 45.6915 154.085 43.6744H157.19C157.382 44.9869 158.172 46.208 159.56 47.3378C160.947 48.4676 162.559 49.0317 164.397 49.0317C166.234 49.0317 167.777 48.5309 169.029 47.5311C170.28 46.5296 170.905 45.261 170.905 43.7235C170.905 42.1861 170.28 40.9808 169.029 40.2041C167.777 39.4275 165.973 38.8389 163.615 38.4383C161.049 38.006 158.983 37.2769 157.419 36.2525C155.854 35.2281 155.073 33.6187 155.073 31.4241C155.073 29.2295 155.988 27.3125 157.816 25.9596C159.645 24.6066 161.787 23.9302 164.24 23.9302C167.128 23.9302 169.384 24.5539 171.014 25.8032C172.642 27.0525 173.592 28.8711 173.865 31.2572H170.905C170.616 29.6881 169.838 28.5583 168.571 27.8695C167.304 27.1808 166.06 26.8206 164.842 26.7889C163.174 26.7257 161.722 27.0525 160.486 27.7746C159.251 28.495 158.633 29.5598 158.633 30.969C158.633 32.3782 159.214 33.508 160.377 34.1633C161.54 34.8205 163.203 35.316 165.37 35.6533C171.417 36.5986 174.44 39.2009 174.44 43.46C174.44 45.7828 173.478 47.7472 171.552 49.3567C169.627 50.9662 167.237 51.7709 164.383 51.7709L164.384 51.7692Z"
          fill="currentColor"
        />
        <path
          d="M191.862 24.0235C195.535 24.0235 198.514 25.3132 200.8 27.8908C203.087 30.4702 204.229 33.7243 204.229 37.6566C204.229 41.5889 203.065 44.8746 200.741 47.5172C198.414 50.1599 195.406 51.4812 191.718 51.4812C187.612 51.4812 184.426 49.7909 182.165 46.4121V63.6366H178.724V24.287H181.78L182.165 28.9468C184.33 25.6646 187.563 24.0217 191.862 24.0217V24.0235ZM191.381 48.4309C194.204 48.4309 196.487 47.3978 198.227 45.3315C199.968 43.2651 200.837 40.7121 200.837 37.6689C200.837 34.6256 199.975 32.0076 198.25 29.9571C196.526 27.9066 194.236 26.8822 191.381 26.8822C189.055 26.8822 187.063 27.6553 185.403 29.1998C183.744 30.746 182.665 32.728 182.167 35.1457V40.1657C182.663 42.601 183.744 44.5865 185.403 46.1239C187.063 47.6613 189.057 48.4292 191.381 48.4292V48.4309Z"
          fill="currentColor"
        />
        <path
          d="M218.978 51.6725C215.192 51.6725 212.093 50.3389 209.679 47.6734C207.264 45.0062 206.057 41.7047 206.057 37.7636C206.057 33.8225 207.264 30.5174 209.679 27.8432C212.093 25.1689 215.192 23.8318 218.978 23.8318C222.764 23.8318 225.908 25.1689 228.314 27.8432C230.72 30.5174 231.924 33.8242 231.924 37.7636C231.924 41.7029 230.72 45.0062 228.314 47.6734C225.908 50.3407 222.795 51.6725 218.978 51.6725ZM212.109 45.4262C213.85 47.4925 216.136 48.5256 218.966 48.5256C221.796 48.5256 224.082 47.4925 225.822 45.4262C227.563 43.3598 228.432 40.8068 228.432 37.7636C228.432 34.7203 227.57 32.1023 225.845 30.0518C224.12 28.0013 221.831 26.9769 218.976 26.9769C216.122 26.9769 213.867 28.0013 212.12 30.0518C210.37 32.1023 209.497 34.6729 209.497 37.7636C209.497 40.8543 210.367 43.3616 212.107 45.4262H212.109Z"
          fill="currentColor"
        />
        <path
          d="M249.513 24.0233L249.465 26.9787C246.737 26.7222 244.441 27.3793 242.572 28.9484C240.703 30.5174 239.768 32.7682 239.768 35.699V51.3369H236.208V24.2869H239.263L239.768 29.6442C240.138 28.8271 240.514 28.1313 240.9 27.555C241.285 26.9787 241.838 26.3707 242.559 25.7294C243.281 25.0898 244.235 24.6277 245.423 24.3484C246.609 24.069 247.973 23.96 249.513 24.0233Z"
          fill="currentColor"
        />
        <path
          d="M263.443 51.3846C258.711 51.3846 256.345 49.1356 256.345 44.6339L256.393 26.9297H252.254V24.1905H256.393V14.4387H259.833V24.1922H265.896V26.9789L259.689 26.9315V44.156C259.689 44.8132 259.721 45.3368 259.786 45.7304C259.849 46.1222 259.99 46.5386 260.207 46.9796C260.423 47.4207 260.803 47.7492 261.349 47.9653C261.894 48.1815 262.591 48.2904 263.441 48.2904H266.305V51.3899H263.441L263.443 51.3846Z"
          fill="currentColor"
        />
        <path
          d="M28.7569 66.7557L1.78656 51.1845C1.17918 50.8336 0.804932 50.1857 0.804932 49.4839V18.3416C0.804932 17.6398 1.17918 16.9919 1.78656 16.641L28.7569 1.06984C29.3642 0.718907 30.1127 0.718907 30.7201 1.06984L57.6904 16.641C58.2978 16.9919 58.6721 17.6398 58.6721 18.3416V49.4839C58.6721 50.1857 58.2978 50.8336 57.6904 51.1845L30.7201 66.7557C30.1127 67.1066 29.3642 67.1066 28.7569 66.7557ZM6.69471 48.3513L28.7569 61.0892C29.3642 61.4401 30.1127 61.4401 30.7201 61.0892L52.7823 48.3513C53.3897 48.0004 53.7639 47.3525 53.7639 46.6506V21.1761C53.7639 20.4742 53.3897 19.8263 52.7823 19.4754L30.7201 6.73754C30.1127 6.3866 29.3642 6.3866 28.7569 6.73754L6.69471 19.4754C6.08733 19.8263 5.71308 20.4742 5.71308 21.1761V46.6506C5.71308 47.3525 6.08733 48.0004 6.69471 48.3513Z"
          fill="url(#paint0_linear_1465_950)"
        />
        <path
          d="M28.7565 11.2432L10.5964 21.7282C9.98899 22.0792 9.61475 22.727 9.61475 23.4289V43.2652C9.61475 44.6677 10.3632 45.9647 11.578 46.6653L13.7867 47.9402C14.1143 48.1292 14.5229 47.8936 14.5229 47.5157V26.2634C14.5229 25.5615 14.8971 24.9136 15.5045 24.5627L28.7565 16.9121C29.3639 16.5612 30.1124 16.5612 30.7198 16.9121L43.9718 24.5627C44.5792 24.9136 44.9534 25.5615 44.9534 26.2634V41.5658C44.9534 42.2676 44.5792 42.9155 43.9718 43.2664L30.7198 50.917C30.1124 51.268 29.3639 51.268 28.7565 50.917L24.3392 48.3672C23.7318 48.0163 23.3576 47.3684 23.3576 46.6666V31.3642C23.3576 30.6623 23.7318 30.0144 24.3392 29.6635L28.7565 27.1137C29.3639 26.7628 30.1124 26.7628 30.7198 27.1137L35.1371 29.6635C35.7445 30.0144 36.1188 30.6623 36.1188 31.3642V36.465C36.1188 37.1668 35.7445 37.8147 35.1371 38.1657L32.9285 39.4405C32.6008 39.6295 32.1922 39.3939 32.1922 39.016V35.8785V33.6661C32.1922 32.9642 31.818 32.3164 31.2106 31.9654L30.229 31.3985C29.9247 31.2231 29.5517 31.2231 29.2474 31.3985L28.0203 32.1065C27.5651 32.3691 27.2841 32.8562 27.2841 33.3814V33.9127V44.4199C27.2841 45.1242 27.662 45.7745 28.2731 46.1242L28.7467 46.3942C29.3529 46.7402 30.0977 46.739 30.7026 46.3892L40.0453 40.9952C40.6527 40.6443 41.0269 39.9964 41.0269 39.2945V28.526C41.0269 27.8242 40.6527 27.1763 40.0453 26.8254L30.7198 21.4411C30.1124 21.0902 29.3639 21.0902 28.7565 21.4411L19.431 26.8254C18.8237 27.1763 18.4494 27.8242 18.4494 28.526V49.4949C18.4494 50.1968 18.8237 50.8446 19.431 51.1956L28.7565 56.5798C29.3639 56.9307 30.1124 56.9307 30.7198 56.5798L48.88 46.0948C49.4873 45.7438 49.8616 45.0959 49.8616 44.3941V23.4252C49.8616 22.7234 49.4873 22.0755 48.88 21.7246L30.7198 11.2395C30.1124 10.8886 29.3639 10.8886 28.7565 11.2395V11.2432Z"
          fill="url(#paint1_linear_1465_950)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1465_950"
            x1="13.1406"
            y1="2.18744"
            x2="43.2173"
            y2="65.9764"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A47D3" />
            <stop offset="1" stopColor="#6CB6AD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1465_950"
            x1="18.1943"
            y1="11.9328"
            x2="38.9759"
            y2="56.1852"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4A47D3" />
            <stop offset="1" stopColor="#6CB6AD" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ paddingBottom: 4 }}>docs</div>
    </div>
  ),
  project: {
    link: "https://github.com/gitcoinco/passport-docs",
  },
  chat: {
    link: "https://discord.gg/gitcoin",
  },
  docsRepositoryBase: "https://github.com/gitcoinco/passport-docs/tree/main",
  footer: { component: null },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Gitcoin Passport",
    };
  },
};

const CustomHead: React.FC = () => {
  const { asPath, defaultLocale, locale } = useRouter();
  const { frontMatter } = useConfig();
  const url =
    "https://docs.passport.gitcoin.co" +
    (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

  const router = useRouter();

  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView();

    // Function to handle route changes
    const handleRouteChange = (url) => {
      logPageView();
    };

    // Add the event listeners
    router.events.on("routeChangeStart", handleRouteChange);

    // Cleanup the event listeners on component unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={frontMatter.title || "Gitcoin Passport"}
      />
      <meta
        name="twitter:description"
        content="Gitcoin Passport — Sybil Defense. Made Simple"
      />
      <meta name="twitter:site" content="@gitcoinpassport" />
      <meta
        name="twitter:image"
        content="https://docs.passport.gitcoin.co/social-card.png"
      />

      <meta property="og:url" content={url} />
      <meta
        property="og:title"
        content={frontMatter.title || "Gitcoin Passport"}
      />
      <meta
        property="og:description"
        content="Gitcoin Passport — Sybil Defense. Made Simple"
      />
      <meta
        name="og:image"
        content="https://docs.passport.gitcoin.co/social-card.png"
      />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </>
  );
};

export default { ...config, head: CustomHead };
