# React Mounter

React Mounter lets you mount React components to DOM easily.

> React Mounter supports Server Side Rendering when used with [FlowRouter](https://github.com/kadirahq/flow-router).

Normally, when you are rendering a React Component to the DOM, you need to do following things basically,

* Create a root DOM node as the root node for React
* Wait for the DOM to load properly
* Then render the component

React Mounter does all these for you. You just ask it to render a component.

Additionally, React Mounter can work as a simple Layout Manager where you can use with [Flow Router](https://github.com/kadirahq/flow-router).

## Basic Usage

Install with:

```
npm i --save react-mounter react react-dom
```

> `react` and `react-dom` are peerDependencies of `react-mounter`. So, you need to install them into your app manually.

Then let's mount a component.

```js
import React from 'react';
import {mount} from 'react-mounter';

const WelcomeComponent = ({name}) => (<p>Hello, {name}</p>);

mount(WelcomeComponent, {name: 'Arunoda'});
```

## Using as a Layout Manager

You can user `react-mounter` as a layout Manager for Flow Router. Here's how to do it.

Let's say we've a layout called MainLayout.

```js
const MainLayout = ({content}) => (
    <div>
      <header>
        This is our header
      </header>
      <main>
        {content}
      </main>
    </div>
);
```

Now let's try render to our `WelcomeComponent` into the `MainLayout`.

```js
mount(MainLayout, {
  content: <WelcomeComponent name="Arunoda" />
});
```

That's it.

### To use the React Context

In order to use the React context, you need to render the `content` component inside the layout. So we need to pass a function instead of the React element. Here's how to do it.

```js
const MainLayout = ({content}) => (
    <div>
      <header>
        This is our header
      </header>
      <main>
        {content()}
      </main>
    </div>
);
```

> See, now content is a function.

Then, we can pass the Welcome component like this:

```js
mount(MainLayout, {
  content: () => (<WelcomeComponent name="Arunoda" />)
});
```

## Configure Root DOM node

By default React Mounter render our components into a DOM node called `react-root`. But, you can configure if by like below:

```js
const {mount, withOptions} from `react-mounter`;
const mount2 = withOptions({
    rootId: 'the-root',
    rootProps: {'className': 'some-class-name'}
}, mount);

mount2(WelcomeComponent, {name: 'Arunoda'});
```

## Server Side Rendering (SSR)

SSR is supported when used with [FlowRouter SSR](https://github.com/kadirahq/flow-router/tree/ssr). Checkout this [sample app](https://github.com/kadira-samples/meteor-data-and-react).
