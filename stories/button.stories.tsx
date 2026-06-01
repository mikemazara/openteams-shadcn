import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "@/ui/button"

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
    loading: false,
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

/** Nebari primary button — sizes × states (hover/focus need interaction). */
export const Primary: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="space-y-10">
      <section className="space-y-3">
        <h3 className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Text
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Button</Button>
          <Button size="sm">Button</Button>
          <Button>Button</Button>
          <Button size="lg">Button</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button loading size="xs">
            Button
          </Button>
          <Button loading size="sm">
            Button
          </Button>
          <Button loading>Button</Button>
          <Button loading size="lg">
            Button
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled size="xs">
            Button
          </Button>
          <Button disabled size="sm">
            Button
          </Button>
          <Button disabled>Button</Button>
          <Button disabled size="lg">
            Button
          </Button>
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
          Icon only
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon-xs" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button size="icon-sm" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button size="icon" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button size="icon-lg" aria-label="Add">
            <PlusIcon />
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button loading size="icon-xs" aria-label="Loading" />
          <Button loading size="icon-sm" aria-label="Loading" />
          <Button loading size="icon" aria-label="Loading" />
          <Button loading size="icon-lg" aria-label="Loading" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled size="icon-xs" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button disabled size="icon-sm" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button disabled size="icon" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button disabled size="icon-lg" aria-label="Add">
            <PlusIcon />
          </Button>
        </div>
      </section>
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs">Extra small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const WithIcon: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button>
        <PlusIcon />
        New item
      </Button>
      <Button size="icon" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button loading size="icon" aria-label="Loading" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
    </div>
  ),
}
