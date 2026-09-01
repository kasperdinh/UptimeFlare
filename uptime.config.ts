// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Kasper Dinh - System Status",
  links: [
    { link: 'https://kasperdinh.com', label: 'Portfolio' },
    { link: 'https://stream.kasperdinh.com', label: 'Jellyfin Stream' },
    { link: 'https://request.kasperdinh.com', label: 'Jellyseerr Request' },
    { link: 'https://github.com/kasperdinh', label: 'GitHub' },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'portfolio',
      name: 'Portfolio Website (kasperdinh.com)',
      method: 'GET',
      target: 'https://kasperdinh.com',
      tooltip: 'Main Portfolio Website',
      statusPageLink: 'https://kasperdinh.com',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'jellyfin_stream',
      name: 'Jellyfin Media Server (stream.kasperdinh.com)',
      method: 'GET',
      target: 'https://stream.kasperdinh.com',
      tooltip: 'Jellyfin Streaming Portal',
      statusPageLink: 'https://stream.kasperdinh.com',
      expectedCodes: [200, 302],
      timeout: 10000,
    },
    {
      id: 'jellyseerr_request',
      name: 'Jellyseerr Movie Request (request.kasperdinh.com)',
      method: 'GET',
      target: 'https://request.kasperdinh.com',
      tooltip: 'Media Request Portal',
      statusPageLink: 'https://request.kasperdinh.com',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'nhatroso_web',
      name: 'Nhà Trọ Số Web (nhatroso.com)',
      method: 'GET',
      target: 'http://kasperdinh.com:8085',
      tooltip: 'Property Management Web',
      expectedCodes: [200],
      timeout: 10000,
    }
  ],
  notification: {
    timeZone: 'Asia/Ho_Chi_Minh',
    gracePeriod: 3,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
