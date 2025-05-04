export default interface ITimeline {
    title: string;
    location: string;
    start: Date;
    end?: Date;
}

export interface IExperienceTimeline extends ITimeline {
    keyAchievements: string[];
}

export interface IEducationTimeline extends ITimeline {
    type: string
}