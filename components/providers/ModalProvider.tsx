"use client";

import CreateServerModal from "@/components/modals/CreateServerModal";
import InviteServerModal from "../modals/InviteServerModal";
import EditServerModal from "../modals/EditServerModal";
import MembersModal from "../modals/MembersModal";
import CreateChannelModal from "../modals/CreateChannelModal";
import LeaveServerModal from "../modals/LeaveServerModal";
import DeleteServerModal from "../modals/DeleteServerModal";

export const ModalProvider = () => {
  return (
    <>
      <CreateServerModal />
      <InviteServerModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
    </>
  );
};
