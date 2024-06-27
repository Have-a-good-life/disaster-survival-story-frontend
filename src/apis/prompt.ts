import {
  EVALUATE_USER_REACTION_URL,
  GET_BEST_REACTSIONS,
  GET_RANDOM_SITUATION,
} from "@/constants/endpoint";
import { Evaluation, Situation, UserReaction } from "@/types/prompt";

export const getRandomSituation = async (): Promise<Situation> => {
  const response = await fetch(GET_RANDOM_SITUATION);
  if (!response.ok) {
    throw new Error("Netdddddork response was not ok");
  }
  const data: Situation = await response.json();
  console.log(data);
  return data;
};

export const evaluateUserReaction = async (
  reaction: UserReaction
): Promise<Evaluation> => {
  const response = await fetch(EVALUATE_USER_REACTION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reaction),
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  const data: Evaluation = await response.json();
  return data;
};

export const getBestReactions = async (
  situationId: number
): Promise<string> => {
  const response = await fetch(`${GET_BEST_REACTSIONS}/${situationId}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.text();
  return data;
};
