import axios from "axios";

export const handleStartContainer = async ({ id, name, state, router }) => {
  try {
    if (state === "running") {
      console.error(
        `Error while starting container ${name} with the ID ${id}: Container already running!`
      );
    } else {
      console.log(`Starting container ${name} with the ID ${id}`);
      const response = await axios.get(`/api/containers/${id}/start`);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  } catch (error) {
    console.error(
      `Error while starting container ${name} with the ID ${id}: ${error}`
    );
  }
};

export const handleStopContainer = async ({ id, name, state, router }) => {
  try {
    if (state === "exited") {
      console.error(
        `Error while stopping container ${name} with the ID ${id}: Container is not running!`
      );
    } else {
      console.log(`Stopping container ${name} with the ID ${id}`);
      const response = await axios.get(`/api/containers/${id}/stop`);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  } catch (error) {
    console.error(
      `Error while stopping container ${name} with the ID ${id}: ${error}`
    );
  }
};

export const handleRestartContainer = async ({ id, name, state, router }) => {
  try {
    console.log(`Restarting container ${name} with the ID ${id}`);
    const response = await axios.get(`/api/containers/${id}/restart`);

    setTimeout(() => {
      router.push("/");
    }, 2000);
  } catch (error) {
    console.error(
      `Error while restarting container ${name} with the ID ${id}: ${error}`
    );
  }
};

export const handleDeleteContainer = async ({ id, name, state, router }) => {
  try {
    if (state === "running") {
      console.error(
        `Error while deleting container ${name} with the ID ${id}: Stop container before deleting it!`
      );
    } else {
      console.log(`Deleting container ${name} with the ID ${id}`);
      const response = await axios.get(`/api/containers/${id}/delete`);

      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  } catch (error) {
    console.error(
      `Error while deleting container ${name} with the ID ${id}: ${error}`
    );
  }
};
