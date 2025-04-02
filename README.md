# Say Hello Functions

A list of not so helpful functions. This is just a test library

# greeting-functions

A TypeScript-first library providing flexible and customizable greeting functions with support for multiple languages, styles, and time-based greetings.

<!-- PackageAI Verification: pkgai_069cvnngeavg_m8ovl0au -->

## Features

- 🌍 **Multi-language Support**: Greet in English, Spanish, French, German, and Italian
- 🎭 **Multiple Styles**: Choose between formal, casual, and funny greetings
- ⏰ **Time-based Greetings**: Automatic greetings based on time of day
- 📝 **TypeScript-first**: Full TypeScript support with type definitions
- ✨ **Zero Dependencies**: Lightweight and efficient

## Installation

```bash
npm install greeting-functions
# or
yarn add greeting-functions
# or
pnpm add greeting-functions
```

## Usage

### Basic Usage

```typescript
import { greet } from "greeting-functions";

// Default casual greeting in English
greet("Alice"); // "Hey, Alice!"
```

### Greeting Styles

```typescript
// Formal greeting
greet("Alice", { style: "formal" }); // "Good day, Alice."

// Casual greeting
greet("Alice", { style: "casual" }); // "Hey, Alice!"

// Funny greeting
greet("Alice", { style: "funny" }); // "Yo, Alice!"
```

### Language Support

```typescript
// Spanish greeting
greet("Alice", { language: "es" }); // "¡Hola Alice!"

// French greeting
greet("Alice", { language: "fr" }); // "Salut Alice!"

// German greeting
greet("Alice", { language: "de" }); // "Hallo Alice!"

// Italian greeting
greet("Alice", { language: "it" }); // "Ciao Alice!"
```

### Time-based Greetings

```typescript
// Greets based on the current time
greet("Alice", { timeBased: true });

// Or specify an hour (0-23)
greet("Alice", { timeBased: true, hour: 8 }); // "Good morning, Alice."
greet("Alice", { timeBased: true, hour: 14 }); // "Good afternoon, Alice."
greet("Alice", { timeBased: true, hour: 19 }); // "Good evening, Alice."
greet("Alice", { timeBased: true, hour: 23 }); // "Good night, Alice."
```

### Combining Options

```typescript
// Time-based greeting in a different language
greet("Alice", {
  timeBased: true,
  hour: 8,
  language: "es",
}); // "Buenos días Alice."
```

## API Reference

### greet(name: string, options?: GreetingOptions): string

#### Parameters

- `name` (required): The name of the person to greet
- `options` (optional): Configuration object with the following properties:
  - `style?: 'formal' | 'casual' | 'funny'` - Greeting style (default: 'casual')
  - `language?: 'en' | 'es' | 'fr' | 'de' | 'it'` - Greeting language (default: 'en')
  - `timeBased?: boolean` - Whether to use time-based greetings (default: false)
  - `hour?: number` - Hour in 24-hour format (0-23) for time-based greetings

## Time Periods

The time-based greetings follow these periods:

- Morning: 5:00 - 11:59
- Afternoon: 12:00 - 16:59
- Evening: 17:00 - 21:59
- Night: 22:00 - 4:59

## TypeScript Support

The package is written in TypeScript and includes type definitions. You'll get full IntelliSense support in TypeScript-aware editors.

```typescript
import {
  greet,
  GreetingOptions,
  GreetingStyle,
  Language,
} from "greeting-functions";

// All types are exported for your convenience
const options: GreetingOptions = {
  style: "formal",
  language: "en",
  timeBased: false,
};
```

## License

MIT © [ezzeldin]

## Links

- [Homepage](https://bento.me/ezzeldin-mo)
- [GitHub Repository](https://github.com/tawhedmuslim1/greeting-functions)
