import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "The capital of France is Paris.",
  },
  {
    id: 2,
    question: "How many continents are there?",
    answer:
      "There are seven continents: Africa, Antarctica, Asia, Europe, North America, Australia, and South America.",
  },
  {
    id: 3,
    question: "What is the tallest mountain in the world?",
    answer: "The tallest mountain in the world is Mount Everest.",
  },
];

export default function AccordionPage() {
  return (
    <Accordion type="single" className="w-full">
      {items.map((item) => (
        <AccordionItem value={`${item.id}`} key={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
