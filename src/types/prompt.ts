export interface Situation {
  situationId: number;
  situationName: string;
  situationDesc: string;
}

export interface Evaluation {
  evaluation: string;
  injury: string;
}

export interface UserReaction {
  situation_id: number;
  user_reaction: string;
}
