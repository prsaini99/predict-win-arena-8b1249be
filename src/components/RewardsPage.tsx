
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import NavigationBar from "./NavigationBar";
import { toast } from "sonner";

interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  image: string;
  isAvailable: boolean;
}

interface ClaimableReward {
  id: string;
  name: string;
  pointsCost: number;
  description: string;
  expiryDate?: string;
  image: string;
}

interface RedemptionHistory {
  id: string;
  rewardName: string;
  pointsCost: number;
  dateRedeemed: string;
  status: "processing" | "completed";
}

const RewardsPage = () => {
  const [selectedReward, setSelectedReward] = useState<ClaimableReward | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock user data
  const userData = {
    points: 1850,
    nextMilestone: 2000,
  };

  // Mock rewards data
  const milestoneRewards: Reward[] = [
    {
      id: "reward1",
      name: "₹50 Amazon Voucher",
      description: "Redeem for a ₹50 Amazon gift card",
      pointsRequired: 1000,
      image: "/placeholder.svg",
      isAvailable: true,
    },
    {
      id: "reward2",
      name: "₹150 Flipkart Voucher",
      description: "Redeem for a ₹150 Flipkart gift card",
      pointsRequired: 2000,
      image: "/placeholder.svg",
      isAvailable: false,
    },
    {
      id: "reward3",
      name: "₹500 PhonePe Cashback",
      description: "Get ₹500 cash directly in your PhonePe wallet",
      pointsRequired: 5000,
      image: "/placeholder.svg",
      isAvailable: false,
    },
  ];

  const claimableRewards: ClaimableReward[] = [
    {
      id: "claim1",
      name: "₹50 Amazon Voucher",
      pointsCost: 1000,
      description: "Redeem your points for a ₹50 Amazon gift card that can be used on any purchase.",
      expiryDate: "Jun 15, 2025",
      image: "/placeholder.svg",
    },
    {
      id: "claim2",
      name: "Cricket Team Jersey",
      pointsCost: 3000,
      description: "Redeem for an official Indian cricket team jersey.",
      image: "/placeholder.svg",
    },
    {
      id: "claim3",
      name: "Premium Subscription",
      pointsCost: 800,
      description: "Get 1 month of premium subscription with no ads and exclusive content.",
      image: "/placeholder.svg",
    },
  ];

  const redemptionHistory: RedemptionHistory[] = [
    {
      id: "history1",
      rewardName: "₹50 Amazon Voucher",
      pointsCost: 1000,
      dateRedeemed: "May 5, 2025",
      status: "completed",
    },
    {
      id: "history2",
      rewardName: "Premium Subscription",
      pointsCost: 800,
      dateRedeemed: "Apr 20, 2025",
      status: "processing",
    },
  ];

  const openClaimDialog = (reward: ClaimableReward) => {
    setSelectedReward(reward);
    setIsDialogOpen(true);
  };

  const closeClaimDialog = () => {
    setIsDialogOpen(false);
  };

  const handleClaim = () => {
    if (!selectedReward) return;

    if (userData.points < selectedReward.pointsCost) {
      toast.error("Not enough points to claim this reward");
      return;
    }

    // In a real app, this would send a claim request to the backend
    toast.success(`Successfully claimed ${selectedReward.name}!`);
    closeClaimDialog();
  };

  // Calculate progress percentage to next milestone
  const progressToNextMilestone = Math.min(
    100,
    Math.round((userData.points / userData.nextMilestone) * 100)
  );

  return (
    <div className="p-4 pb-20 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Rewards</h1>

      {/* Points summary */}
      <div className="sport-card p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-lg">Your Points</h2>
          <span className="text-xl font-bold text-sport-blue">
            {userData.points} pts
          </span>
        </div>

        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress to next milestone</span>
            <span>
              {userData.points}/{userData.nextMilestone} pts
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-sport-blue h-2.5 rounded-full"
              style={{ width: `${progressToNextMilestone}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Milestone rewards section */}
      <h2 className="font-bold text-lg mb-3">Milestone Rewards</h2>
      <div className="grid grid-cols-1 gap-4 mb-6">
        {milestoneRewards.map((reward) => (
          <div
            key={reward.id}
            className={`sport-card overflow-hidden ${
              !reward.isAvailable ? "opacity-70" : ""
            }`}
          >
            <div className="flex">
              <div className="w-24 h-24 bg-gray-100 shrink-0">
                <img
                  src={reward.image}
                  alt={reward.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-medium">{reward.name}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {reward.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sport-blue font-bold">
                    {reward.pointsRequired} pts
                  </span>
                  {reward.isAvailable ? (
                    <Button 
                      size="sm"
                      className="claim-button"
                      onClick={() => {
                        const claimReward = claimableRewards.find(
                          (r) => r.name === reward.name
                        );
                        if (claimReward) {
                          openClaimDialog(claimReward);
                        }
                      }}
                    >
                      Claim
                    </Button>
                  ) : (
                    <div className="text-sm text-gray-500">
                      {userData.points}/{reward.pointsRequired} pts
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Claimable rewards section */}
      <h2 className="font-bold text-lg mb-3">Available Rewards</h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {claimableRewards.map((reward) => (
          <HoverCard key={reward.id}>
            <HoverCardTrigger asChild>
              <div
                className="sport-card p-3 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => openClaimDialog(reward)}
              >
                <div className="w-full h-28 bg-gray-100 rounded-md mb-2 overflow-hidden">
                  <img
                    src={reward.image}
                    alt={reward.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-sm truncate">{reward.name}</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sport-blue font-bold text-sm">
                    {reward.pointsCost} pts
                  </span>
                  <Button size="sm" variant="outline" className="text-xs h-7 px-2">
                    View
                  </Button>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex flex-col">
                <h4 className="font-medium">{reward.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{reward.description}</p>
                {reward.expiryDate && (
                  <div className="text-xs text-gray-500 mt-2">
                    Expires: {reward.expiryDate}
                  </div>
                )}
                <div className="mt-2 text-sport-blue font-bold">
                  {reward.pointsCost} points
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>

      {/* Redemption history section */}
      <h2 className="font-bold text-lg mb-3">Redemption History</h2>
      <div className="sport-card divide-y divide-gray-100">
        {redemptionHistory.length > 0 ? (
          redemptionHistory.map((item) => (
            <div key={item.id} className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium">{item.rewardName}</h3>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.status === "completed"
                      ? "bg-green-100 text-sport-green"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status === "completed" ? "Completed" : "Processing"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{item.dateRedeemed}</span>
                <span className="text-sport-blue font-medium">
                  -{item.pointsCost} pts
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            No redemption history yet
          </div>
        )}
      </div>

      {/* Claim dialog */}
      {selectedReward && (
        <Dialog open={isDialogOpen} onOpenChange={closeClaimDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Claim Reward</DialogTitle>
              <DialogDescription>
                Are you sure you want to claim this reward?
              </DialogDescription>
            </DialogHeader>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4">
                  <img
                    src={selectedReward.image}
                    alt={selectedReward.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{selectedReward.name}</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {selectedReward.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-sport-blue font-bold">
                      {selectedReward.pointsCost} points
                    </span>
                    {selectedReward.expiryDate && (
                      <span className="text-xs text-gray-500 ml-2">
                        Expires: {selectedReward.expiryDate}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg mb-4">
              <div>
                <div className="text-sm">Your balance after redemption:</div>
                <div className="font-bold">
                  {userData.points - selectedReward.pointsCost} points
                </div>
              </div>
              <div className="text-sm text-gray-500">
                Current: {userData.points} pts
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                className="w-1/2"
                onClick={closeClaimDialog}
              >
                Cancel
              </Button>
              <Button
                className="w-1/2 claim-button"
                onClick={handleClaim}
                disabled={userData.points < selectedReward.pointsCost}
              >
                {userData.points < selectedReward.pointsCost
                  ? "Insufficient Points"
                  : "Confirm & Claim"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <NavigationBar />
    </div>
  );
};

export default RewardsPage;
