# @sumup/circuit-ui

## 3.0.0

### Major Changes

- [#884](https://github.com/sumup-oss/circuit-ui/pull/884) [`eb9e0b47`](https://github.com/sumup-oss/circuit-ui/commit/eb9e0b474e675f13c9876e22857a170665e9a92f) Thanks [@amelako](https://github.com/amelako)! - The new semantic typography components make it clear when each should be used, are flexible enough to cover all use cases. To represent more semantic variations some of the sizes have been removed and new size names added.

  #### Headline

  Renamed the `Heading` component to `Headline` and mapped the styles to the new ones. These changes can be codemodded (🤖 _component-names-typography_).
  The size prop has been changed to accept the new size numbers. For `Headline` component **_exa_** and **_peta_** has been changed to **_one_** with new values, **_tera_** has been changed to **_two_**, **_giga_** to **_three_**, **_mega_** and **_kilo_** to **_four_** (🤖 _typography-sizes_)

  Usage example:

  ```diff
  -  <Heading size="kilo" />
  +  <Headline size="four" />
  ```

  #### SubHeadline

  Renamed the `SubHeading` component to `SubHeadline` and mapped the styles to the new ones (🤖 _component-names-typography_). The `SubHeadline` component now uses only one size value (🤖 _typography-sizes_).

  #### Body

  The `Text` component has been renamed to `Body` (🤖 _component-names-typography_). The size prop is adapted to accept the new size numbers and **_giga_** size has been removed, **_mega_** and **_kilo_** sizes have been changed to **_one_** and **_two_** respectively.

  Usage example:

  ```diff
  -  <Text size="mega" />
  +  <Body size="one" />
  ```

  The `Text` component's bold prop has been removed. Use the `Body` component `(variant="highlight")` instead (🤖 _body-variant-highlight_).

  Usage example:

  `<Body variant="highlight">bold</Body>`

  The `Text` component's italic and strike props has been removed. Use the custom styles instead.

  Additionally, the new `success`, `error` and `subtle` variants are added.

  The `Blockquote` component has been removed and replaced by the `Body` component with `variant="quote"`.

  Usage example:

  `<Body variant="quote">quote</Body>`

### Patch Changes

- Updated dependencies [[`eb9e0b47`](https://github.com/sumup-oss/circuit-ui/commit/eb9e0b474e675f13c9876e22857a170665e9a92f)]:
  - @sumup/design-tokens@3.0.0

## 2.5.0

### Minor Changes

- [#924](https://github.com/sumup-oss/circuit-ui/pull/924) [`4660f112`](https://github.com/sumup-oss/circuit-ui/commit/4660f112f973793245532a0e28517068c8f64e73) Thanks [@mykolaharmash](https://github.com/mykolaharmash)! - Added support for `null` or `undefined` values in `<Table>` cells.

* [#932](https://github.com/sumup-oss/circuit-ui/pull/932) [`ee278194`](https://github.com/sumup-oss/circuit-ui/commit/ee27819499f4b29adbc628f2cfba7fae2b1907a0) Thanks [@connor-baer](https://github.com/connor-baer)! - Added an `optionalLabel` prop to the Input and Select components. The "(optional)" label is displayed in lighter grey after the main label when the field is not required.

- [#946](https://github.com/sumup-oss/circuit-ui/pull/946) [`a089cf1c`](https://github.com/sumup-oss/circuit-ui/commit/a089cf1c883d409006452c7ddd9b82677a8b5547) Thanks [@connor-baer](https://github.com/connor-baer)! - Added `removeModal` and `isModalOpen` properties to `useModal` hook and deprecated the `getModal` property.

* [#935](https://github.com/sumup-oss/circuit-ui/pull/935) [`6c881cb6`](https://github.com/sumup-oss/circuit-ui/commit/6c881cb68636281694faa10aa556ee9146146b23) Thanks [@connor-baer](https://github.com/connor-baer)! - Added compatibility with the new [JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.htmlhttps://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) which was introduced in React 17.

- [#923](https://github.com/sumup-oss/circuit-ui/pull/923) [`c41a7353`](https://github.com/sumup-oss/circuit-ui/commit/c41a73532bfd373be6a650bb15bd8a802182a135) Thanks [@connor-baer](https://github.com/connor-baer)! - Added a `destructive` prop to the Button component to be used for irreversible actions that require special care from users.

* [#945](https://github.com/sumup-oss/circuit-ui/pull/945) [`abf2c10b`](https://github.com/sumup-oss/circuit-ui/commit/abf2c10b4da586199e46ea639ac3e1c1c3b1e99c) Thanks [@connor-baer](https://github.com/connor-baer)! - Added `inset` option to the `focusOutline` style mixin. This should only be used when the outline cannot be shown outside the element, for example when the overflow is hidden.

### Patch Changes

- [#936](https://github.com/sumup-oss/circuit-ui/pull/936) [`b0f243a3`](https://github.com/sumup-oss/circuit-ui/commit/b0f243a3ada85d3e5f192111ddf0ed206b0e4d18) Thanks [@connor-baer](https://github.com/connor-baer)! - Fixed the alignment of long, multiline labels in the RadioButton component (#934).

- Updated dependencies [[`e4c940bc`](https://github.com/sumup-oss/circuit-ui/commit/e4c940bc803623cab1e36eecc122d67aeb9ca8c8)]:
  - @sumup/design-tokens@2.1.2

## 2.4.3

### Patch Changes

- [#908](https://github.com/sumup-oss/circuit-ui/pull/908) [`7a76802f`](https://github.com/sumup-oss/circuit-ui/commit/7a76802f5b54412a0989fbf5fea4760d6bf1ddbc) Thanks [@connor-baer](https://github.com/connor-baer)! - Prevent the Aggregator in the Sidebar from rendering its children when they're just an empty array, fixes #907.

## 2.4.2

### Patch Changes

- Updated dependencies [[`02558395`](https://github.com/sumup-oss/circuit-ui/commit/025583954df06c95c79584e8639936a03e7f77f4)]:
  - @sumup/icons@1.6.2

## 2.4.1

### Patch Changes

- [#852](https://github.com/sumup-oss/circuit-ui/pull/852) [`95be2245`](https://github.com/sumup-oss/circuit-ui/commit/95be224507274a2e21d0033151b4c02b0f4d3b5c) Thanks [@robinmetral](https://github.com/robinmetral)! - Migrated the Table component to TypeScript without any changes to its API.

* [#852](https://github.com/sumup-oss/circuit-ui/pull/852) [`95be2245`](https://github.com/sumup-oss/circuit-ui/commit/95be224507274a2e21d0033151b4c02b0f4d3b5c) Thanks [@robinmetral](https://github.com/robinmetral)! - Fixed an accessibility issue where Table header cells weren't getting the relevant scope (`col` or `row`).

* Updated dependencies [[`1912119f`](https://github.com/sumup-oss/circuit-ui/commit/1912119fd998ab9d4000e11db5dfa653fdd8c877), [`1912119f`](https://github.com/sumup-oss/circuit-ui/commit/1912119fd998ab9d4000e11db5dfa653fdd8c877)]:
  - @sumup/icons@1.6.1
