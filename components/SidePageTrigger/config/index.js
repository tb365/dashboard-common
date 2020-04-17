import expectStatus from '@/constants/expectStatus'

export default {
  // 主机
  VmInstanceSidePage: {
    resource: 'servers',
    steadyStatus: Object.values(expectStatus.server).flat(),
  },
  // 主机组
  InstanceGroupSidePage: {
    resource: 'instancegroups',
  },
  // 系统镜像
  SystemImageSidePage: {
    resource: 'images',
    apiVersion: 'v1',
    steadyStatus: Object.values(expectStatus.image).flat(),
  },
  // 硬盘
  DiskSidePage: {
    resource: 'disks',
    steadyStatus: {
      status: Object.values(expectStatus.disk).flat(),
      guest_status: [...Object.values(expectStatus.server).flat(), '', undefined],
    },
  },
  // 自动快照策略
  SnapshotPolicySidePage: {
    resource: 'snapshotpolicies',
    steadyStatus: Object.values(expectStatus.snapshotpolicy).flat(),
  },
  // 穿透设备
  GpuSidePage: {
    resource: 'isolated_devices',
    currentTab: 'servers-list',
  },
  // 套餐
  SkuSidePage: {
    resource: 'serverskus',
  },
  // VPC
  VpcSidePage: {
    resource: 'vpcs',
  },
  // IP子网
  NetworkSidePage: {
    resource: 'networks',
  },
  // 二层网络
  WireSidePage: {
    resource: 'wires',
  },
  // 域
  DomainSidePage: {
    resource: 'domains',
    apiVersion: 'v1',
  },
  // 项目
  ProjectSidePage: {
    resource: 'projects',
    apiVersion: 'v1',
  },
  // 物理机
  PhysicalmachineSidePage: {
    resource: 'hosts',
    steadyStatus: {
      status: Object.values(expectStatus.host).flat(),
    },
  },
  // 宿主机
  HostSidePage: {
    resource: 'hosts',
  },
  // 区域
  CloudregionSidePage: {
    resource: 'cloudregions',
  },
  // 可用区域
  ZoneSidePage: {
    resource: 'zones',
  },
  // 云账号
  CloudaccountSidePage: {
    resource: 'cloudaccounts',
  },
  // 认证源
  IDPSidePage: {
    resource: 'identity_providers',
    apiVersion: 'v1',
  },
  // 弹性伸缩组
  ScalingGroupSidePage: {
    resource: 'scalinggroups',
  },
  // 安全组
  SecGroupSidePage: {
    resource: 'secgroups',
  },
  // 代理
  ProxysettingSidePage: {
    resource: 'proxysettings',
  },
}