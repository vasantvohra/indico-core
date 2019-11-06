// This file is part of Indico.
// Copyright (C) 2002 - 2019 CERN
//
// Indico is free software; you can redistribute it and/or
// modify it under the terms of the MIT License; see the
// LICENSE file for more details.

import {createSelector} from 'reselect';

import {RequestState} from 'indico/utils/redux';

export const isFetchingPaperDetails = state =>
  state.paper.requests.details.state === RequestState.STARTED;
export const isPaperStateResetInProgress = state =>
  state.paper.requests.resetState.state === RequestState.STARTED;
export const isAddingComment = state =>
  state.paper.requests.addComment.state === RequestState.STARTED;
export const isDeletingComment = state =>
  state.paper.requests.deleteComment.state === RequestState.STARTED;

export const isEventLocked = state => state.paper.details.event.isLocked;
export const getCurrentUser = state => state.staticData.user;
export const getPaperDetails = state => state.paper.details;
export const getPaperEvent = state => state.paper.details.event;
export const getPaperContribution = state => state.paper.details.contribution;

export const canJudgePaper = createSelector(
  getPaperDetails,
  getPaperEvent,
  ({isInFinalState, canJudge}, {isLocked}) => !isLocked && !isInFinalState && canJudge
);
export const canReviewPaper = createSelector(
  getPaperDetails,
  getPaperEvent,
  ({isInFinalState, canReview}, {isLocked}) => !isLocked && !isInFinalState && canReview
);
export const canCommentPaper = createSelector(
  getPaperDetails,
  getPaperEvent,
  ({isInFinalState, canComment}, {isLocked}) => !isLocked && !isInFinalState && canComment
);
