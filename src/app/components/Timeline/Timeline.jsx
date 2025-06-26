import TimelineItem from "../TimelineItem/TimelineItem";
import TimelineLine from "../TimelineLine/TimelineLine";
// import TimelineItem from "./TimelineItem";

const items = [
  {
    heading: "The Strategy",
    subHeading: "You don’t need more ads. You need better decisions",
    paragraph:
      "We dive deep. Like the Mariana Trench deep. Research, behavior patterns, market gaps—everything your competitors forgot to look at. Then we reverse-engineer a plan that doesn’t just “look good”—it delivers growth. Every click, swipe, and scroll matters. Outcome? A strategy that sells, scales, and stays in memory.",
  },
  {
    heading: "The Creative",
    subHeading: "It’s not just design. It’s persuasion wrapped in pixels",
    paragraph:
      "We're not the “vanish after invoice” type. Whether it’s a weekend idea or a late-night brainstorm, we’re here for the real conversations.",
  },
  {
    heading: "The Execution",
    subHeading: "We don’t vanish after the pitch. We get things done",
    paragraph: `Plans mean nothing without flawless execution. From publishing your first campaign to optimizing the 100th, we obsess over every asset, ad set, and analytics dashboard. We track. We tweak. We toast (when it works—which it does). Because we aren’t “just creatives”—we’re performance junkies in disguise. `,
  },
  {
    heading: "The Optimization",
    subHeading: "Good isn’t enough—we chase greatness",
    paragraph:
      "Every campaign is a living, breathing experiment. We analyze, A/B test, and iterate relentlessly. If there’s a smarter way to win, we’ll find it. Your results aren’t static—they’re always improving.",
  },
  {
    heading: "The Partnership",
    subHeading: "Growth is a journey—let’s travel together",
    paragraph:
      "We’re not just a service provider. We’re your growth partner. Expect transparency, collaboration, and a shared obsession with your success. When you win, we win.",
  },
];

const Timeline = () => {
  return (
    <div className="relative mt-4 pl-4 sm:px-6 lg:mt-32 lg:px-16" id="timeline">
      <TimelineLine />
      {items.map((item, key) => (
        <TimelineItem {...item} id={key + 1} key={key} />
      ))}
    </div>
  );
};

export default Timeline;
