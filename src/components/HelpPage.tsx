
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import NavigationBar from "./NavigationBar";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [supportMessage, setSupportMessage] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info(`Searching for: ${searchQuery}`);
    // In a real app, this would search the help articles
  };

  const handleSendSupport = () => {
    if (supportMessage.trim() === "") {
      toast.error("Please enter a message");
      return;
    }
    
    toast.success("Support message sent! We'll get back to you soon.");
    setSupportMessage("");
  };

  // FAQ data
  const faqItems = [
    {
      question: "How do I make predictions?",
      answer:
        "To make predictions, navigate to a live or upcoming match on the home screen and tap on it. You'll be presented with various prediction questions about the match. Select your prediction and submit before the deadline.",
    },
    {
      question: "How are points calculated?",
      answer:
        "Points are awarded based on the accuracy of your predictions. Correct predictions earn you points, with more difficult predictions earning higher points. The exact point value is displayed with each prediction question.",
    },
    {
      question: "When can I claim rewards?",
      answer:
        "Rewards can be claimed once you've earned enough points to reach the required threshold for that reward. Navigate to the Rewards section to see available rewards and their point requirements.",
    },
    {
      question: "Why didn't I receive points for my prediction?",
      answer:
        "Points are only awarded for predictions made before the deadline. Additionally, you must have selected the correct outcome to earn points. If you believe there's an error, please contact support.",
    },
    {
      question: "How do I check my prediction history?",
      answer:
        "You can view your prediction history in the Profile section under the History tab. This displays all your past predictions, including which were correct and how many points you earned.",
    },
    {
      question: "Can I change my prediction after submitting?",
      answer:
        "Predictions can only be changed before the prediction window closes, which is typically before the match or event starts. After that, predictions are locked and cannot be modified.",
    },
  ];

  // Filter FAQs based on search query
  const filteredFAQs = faqItems.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Help & Support</h1>

      {/* Search */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search help articles..."
            className="pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </form>

      {/* Quick Help */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <Button
          variant="outline"
          className="h-auto py-3 flex flex-col items-center justify-center space-y-1"
          onClick={() => toast.info("Navigating to How to Play guide")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sport-blue"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
          </svg>
          <span className="text-sm font-medium">How to Play</span>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-3 flex flex-col items-center justify-center space-y-1"
          onClick={() => toast.info("Navigating to Rules page")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sport-blue"
          >
            <path d="M2 17h12a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2Z"></path>
            <path d="M14 13h7a1 1 0 0 1 1 1v2h-9l1-3Z"></path>
            <path d="M8 4H2v4h6V4Z"></path>
            <path d="M14 5v3H9v6H2V5h12Z"></path>
          </svg>
          <span className="text-sm font-medium">Rules</span>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-3 flex flex-col items-center justify-center space-y-1"
          onClick={() => toast.info("Navigating to Rewards FAQ")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sport-blue"
          >
            <path d="M19 7.5v9l-3.5 3.5-3.5-3.5-3.5 3.5-3.5-3.5v-9A4.5 4.5 0 0 1 9.5 3h5A4.5 4.5 0 0 1 19 7.5z"></path>
            <circle cx="12" cy="7" r="1"></circle>
          </svg>
          <span className="text-sm font-medium">Rewards FAQ</span>
        </Button>
        <Button
          variant="outline"
          className="h-auto py-3 flex flex-col items-center justify-center space-y-1"
          onClick={() => toast.info("Navigating to Contact Us")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sport-blue"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span className="text-sm font-medium">Contact Us</span>
        </Button>
      </div>

      {/* FAQ Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Find answers to commonly asked questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">
                No FAQs match your search
              </div>
            )}
          </Accordion>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>
            Need more help? Send us a message and we'll get back to you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="support-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <Textarea
                id="support-message"
                placeholder="Describe your issue or question..."
                rows={4}
                value={supportMessage}
                onChange={(e) => setSupportMessage(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-sport-blue hover:bg-sport-blue/90"
            onClick={handleSendSupport}
          >
            Send Message
          </Button>
        </CardFooter>
      </Card>

      <NavigationBar />
    </div>
  );
};

export default HelpPage;
